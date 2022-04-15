import React from 'react'
import { Block, VideoPlayer } from '@components'
import { Button } from '@mui/material'
import { useFileUploadPreview } from './fileUploadPreview.hook'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import { MediaContainer } from 'components/mediaContainer'

export const FileUploadPreview: React.FC = () => {
  const {
    fileType,
    onChange,
    onRemoveSelected,
    selectedFile,
    hiddenFileInput,
    onClick,
  } = useFileUploadPreview()

  return (
    <Block stack>
      {selectedFile && (
        <Block stack>
          <MediaContainer
            mediaType={fileType || ''}
            media={URL.createObjectURL(selectedFile)}
          />

          <Button color="error" variant="contained" onClick={onRemoveSelected}>
            APAGAR
          </Button>
        </Block>
      )}
      <Block
        mt={15}
        padding={4}
        style={{ backgroundColor: 'white', justifyContent: 'space-between' }}
      >
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={onChange}
          style={{ display: 'none' }}
        />
        <Button onClick={onClick} variant="contained">
          <AddPhotoAlternateIcon />
        </Button>
        <Button variant="contained">Upload</Button>
      </Block>
    </Block>
  )
}
