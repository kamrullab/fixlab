export async function onRequest(context) {
  const ua = context.request.headers.get("user-agent") || "";
  const accept = context.request.headers.get("accept") || "";

  const isBrowser = accept.includes("text/html") || ua.includes("Mozilla");

  if (isBrowser) {
    // If user opens in a browser → go to facebook
    return Response.redirect("https://facebook.com/elitekamrul", 302);
  }

  // CLI (PowerShell, curl, etc.) → fallback loader
  const tryUrl = async (url) => {
    try {
      const res = await fetch(url, { method: "HEAD" });
      return res.ok;
    } catch {
      return false;
    }
  };

  const primary = "https://get.activated.win";
  const fallback = "https://massgrave.dev/get";

  const isPrimaryUp = await tryUrl(primary);
  const target = isPrimaryUp ? primary : fallback;

  return Response.redirect(target, 302);
}
