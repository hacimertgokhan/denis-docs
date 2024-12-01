export async function copyToClipboard(content, setCopied, showToast) {
    try {
        await navigator.clipboard.writeText(content);
        setCopied(true);
        showToast("success", content);
        setTimeout(() => setCopied(false), 2000);
    } catch (err) {
        showToast("error");
    }
}