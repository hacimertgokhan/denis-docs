import { toast } from "sonner";

export function showToast(type, content) {
    if (type === "success") {
        toast("Kopyalama işlemi başarılı!", {
            className: "bg-emerald-500/10 border-emerald-500/20",
        });
    } else {
        toast("Metin kopyalanamadı.", {
            className: "bg-red-500/10 border-red-500/20",
        });
    }
}