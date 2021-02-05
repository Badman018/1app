import React from 'react'

export const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const maxLength = max =>
        value => value && value.length > max ? `Must be ${max} characters or less` : undefined
export const maxLength15 = maxLength(15)