import highlight from 'comark/plugins/highlight'
import { shikiThemes, shikiTransformers } from './highlight'

export const plugins = [
  highlight({
    themes: shikiThemes,
    transformers: shikiTransformers
  })
]
