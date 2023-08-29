import { useState, useEffect } from "react"
import axios from 'axios'

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()
// uncertain of these post routes as of now
    useEffect(() => {
        axios
            .post('/showplayground', {
                code,
            })
            .then(res => {
                setAccessToken(res.data.accessToken)
                setRefreshToken(res.data.refreshToken)
                setExpiresIn(res.data.expiresIn)
                window.history.pushState({}, null, "/showplayground")
            }).catch(() => {
                window.location = "/showplayground"
            })
    }, [code])

    useEffect(() => {
        if (!refreshToken || !expiresIn) return
        const interval = setInterval(() => {
            axios
                .post('/refresh', {
                    refreshToken,
                })
                .then(res => {
                    setAccessToken(res.data.accessToken)
                    setExpiresIn(res.data.expiresIn)
                })
                .catch(() => {
                    window.location = "/showplayground"
                })
        }, (expiresIn - 60) * 1000)

        return () => clearInterval(interval)
    }, [refreshToken, expiresIn])

    return accessToken
}