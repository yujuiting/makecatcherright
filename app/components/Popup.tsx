import CloseIcon from './CloseIcon'

export interface PopupProps {
  url: string
  isOpen: boolean
  onClose: () => void
}

export default function Popup({ url, isOpen, onClose }: PopupProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="container mx-auto h-8/12 relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-0 -right-8 cursor-pointer"
        >
          <CloseIcon className="text-white" />
        </button>
        <iframe src={url} className="w-full h-full" />
      </div>
    </div>
  )
}
