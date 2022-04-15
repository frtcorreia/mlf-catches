import React from 'react'
interface FileUploadPreviewHookOutput {
  selectedFile: File | null | undefined
  fileType: string | null | undefined
  onRemoveSelected: () => void
  onChange: (e: any) => void
  onClick: () => void

  hiddenFileInput: React.RefObject<HTMLInputElement>
}

export const useFileUploadPreview = (): FileUploadPreviewHookOutput => {
  const hiddenFileInput = React.useRef<HTMLInputElement>(null)
  const [selectedFile, setSelectedFile] = React.useState<File | null>()
  const [fileType, setFileType] = React.useState<string | null>()

  const handleRemoveSelected = () => {
    setSelectedFile(undefined)
    setFileType(undefined)
  }

  const handleGetFileType = (value: string) => {
    const res = value.toString().split('/')
    return res
  }

  const handleOnChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0])
    }

    const file: File = e.target.files[0]
    const res = handleGetFileType(file.type)
    e.target.value = null
    setFileType(res[0])
  }

  const handleClick = () => {
    hiddenFileInput?.current?.click()
  }

  return {
    selectedFile,
    fileType,
    onRemoveSelected: handleRemoveSelected,
    onChange: handleOnChange,
    hiddenFileInput,
    onClick: handleClick,
  }
}
