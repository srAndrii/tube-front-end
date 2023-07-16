'use client'

import stylesIcon from '../icons-right/IconsRight.module.scss'
import styles from './AuthForm.module.scss'
import { IAuthFields } from './auth-form.interface'
import { validEmail } from './auth.valid'
import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/field/Field'
import { useOutside } from '@/hooks/useOutside'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaUserCircle } from 'react-icons/fa'

export const AuthForm: FC = () => {
	const { isShow, ref, setIsShow } = useOutside(false)
	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<IAuthFields>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IAuthFields> = (data) => {
		// if (type ==='login')
		// 	else if (type==='register')
	}

	return (
		<div className={styles.wrapper} ref={ref}>
			<button
				className={stylesIcon.button}
				onClick={() => setIsShow(!isShow)}
			>
				<FaUserCircle fill='#A4A4A4' />
			</button>
			{isShow && (
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Field
						{...register('email', {
							required: 'E-mail is necessary!',
							pattern: {
								value: validEmail,
								message: 'Invalid email'
							}
						})}
						placeholder='E-mail'
						error={errors.email}
					/>
					<Field
						{...register('password', {
							required: 'Password is necessary!',
							maxLength: {
								value: 6,
								message: 'Min lenght 6 symbols'
							}
						})}
						placeholder='Password'
						error={errors.password}
						type='password'
					/>

					<div className={'mt-5 mb-1 text-center'}>
						<Button onClick={() => setType('login')}>Log in</Button>
					</div>

					<button
						className={styles.register}
						onClick={() => setType('register')}
					>
						Register
					</button>
				</form>
			)}
		</div>
	)
}
export default AuthForm
