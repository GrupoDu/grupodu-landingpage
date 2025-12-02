import toast from "react-hot-toast";

export function showToast({
  toastType,
  message,
}: {
  toastType: "success" | "error";
  message: string;
}) {
  return toast[toastType](message);
}
