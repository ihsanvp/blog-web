export async function onRequestPost(context) {
    const token = context.env.GITHUB_TOKEN

    const res = await fetch("https://api.github.com/repos/ihsanvp/blog-web/dispatches", {
        method: "post",
        body: JSON.stringify({
            event_type: "studio_deploy_trigger"
        }),
        headers: {
            "user-agent": "Blog",
            "content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    console.log("token", token)
    console.log("Trigger Build Status:", res.status)
    console.log(await res.text())

    if (!res.ok) {
        return new Response("failure")
    }

    return new Response("success")
}