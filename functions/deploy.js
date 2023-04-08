export async function onRequest(context) {
    console.log(context)

    return new Response("ok")
}