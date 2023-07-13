import { IFieldProps } from '../field/Field.interface'
import { TextareaHTMLAttributes } from 'react'

type TypeInputPropsField = TextareaHTMLAttributes<HTMLTextAreaElement> &
	IFieldProps

export interface ITextArea extends TypeInputPropsField {}
