import { ElForm } from 'element-plus'
import type { FormItemRule } from 'element-plus'

export type IElForm = InstanceType<typeof ElForm>

export type IFormRule = Record<string, FormItemRule[]>
