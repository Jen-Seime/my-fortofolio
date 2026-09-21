import { WifiOff, RotateCw } from "lucide-react";

interface ErrorProps {
  
  title?: string;
 
  detail?: string;
  
  onRetry?: () => void;
}

export default function Error({

  title = "Gagal memuat data",
  detail = "Server tidak merespons. Periksa koneksi Anda, lalu coba lagi.",
  onRetry,

}: ErrorProps) {

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-6 bg-white px-6 text-center ">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 ">
        <WifiOff className="h-7 w-7 text-neutral-400" aria-hidden="true" />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-neutral-900 ">
          {title}
        </h1>
        <p className="max-w-sm text-sm text-neutral-500 ">
          {detail}
        </p>
      </div>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2  "
        >
          <RotateCw className="h-4 w-4" aria-hidden="true" />
          Coba Lagi
        </button>
      )}
    </div>
  );
}