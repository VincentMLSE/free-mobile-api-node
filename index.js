export default async function FreeMobileSms(user, pass, message) {

    if (!user || !pass || !message) {
        return new Error('Missing user, pass or message')
    }

    const url = `https://smsapi.free-mobile.fr/sendmsg?user=${user}&pass=${pass}&msg=${encodeURIComponent(message)}`

    const response = await fetch(url, { mode: 'no-cors' })
    const err = response.error || response.headers.get('X-Error')

    if (err) {
        return new Error(err)
    }

    return new Response(response, { status: 200 })
}