export default async function FreeMobileSms(user, pass, message) {

    const url = `https://smsapi.free-mobile.fr/sendmsg?user=${user}&pass=${pass}&msg=${encodeURIComponent(message)}`

    const response = await fetch(url, { mode: 'no-cors' })
    const err = response.error

    if (err) {
        return new Error(err)
    }

    return true
}