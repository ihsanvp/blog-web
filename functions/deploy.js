export async function onRequestPost(context) {
    const token = context.env.GITHUB_TOKEN

    const res = await fetch("https://api.github.com/repos/ihsanvp/blog-web/dispatches", {
        method: "post",
        body: {
            event_type: "studio_deploy_trigger"
        },
        headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    console.log("Trigger Build Status:", res.status)
    console.log(await res.text())

    return new Response("success")
}