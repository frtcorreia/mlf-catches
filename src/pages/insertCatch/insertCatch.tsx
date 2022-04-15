import React from 'react'
import {
  AppContainer,
  AppFooter,
  Block,
  FileUploadPreview,
  ProgressBar,
} from '@components'
import { AppHeader } from 'components/appHeader'
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { Delete, OpenInFull } from '@mui/icons-material'

interface InsertCatch {
  fileName: string
  fileType: string
  filePath: string
}

const data: InsertCatch[] = [
  {
    fileName: 'fileName 1',
    fileType: 'video',
    filePath: '',
  },
  {
    fileName: 'fileName 2',
    fileType: 'image',
    filePath: '',
  },
]

export const InsertCatch: React.FC = () => {
  return (
    <AppContainer>
      <AppHeader />
      <Block stack padding={20}>
        <Block stack>
          <FileUploadPreview />
        </Block>

        <Block mt={20}>
          <TableContainer component={Paper}>
            <Table
              sx={{ width: '100%' }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="right">Ficheiro</TableCell>
                  <TableCell align="right">Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="right">{row.fileName}</TableCell>
                    <TableCell align="right">
                      <Delete />
                      <OpenInFull />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Block>
      </Block>

      <AppFooter />
    </AppContainer>
  )
}
