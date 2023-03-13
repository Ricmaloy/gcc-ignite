import styled from 'styled-components'

export const Filter = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
})

export const FilterLabel = styled('label')({
  fontSize: '12px',
  lineHeight: '14px',
  fontWeight: '500',
})

export const FilterWrapper = styled('div')({
  position: 'relative',

  '> img': {
    position: 'absolute',
    right: '18px',
    top: '50%',
    transform: 'translateY(-50%)',
  },
})

export const FilterInput = styled('select')({
  width: '100%',
  height: '60px',
  fontSize: '16px',
  lineHeight: '19.2px',
  fontWeight: '800',
  color: '#FFFFFF',
  backgroundColor: '#F75F64',
  borderRadius: '15px',
  border: 'none',
  outline: 'none',
  padding: '20px',
  appearance: 'none',
  position: 'relative',

  ':before': {
    content: '⌄',
    width: '12px',
    height: '6px',
    display: 'absolute',
    color: '#FFFFFF',
  },
})

export const FilterInputOption = styled('option')({
  fontFamily: 'Nunito',
  fontSize: '14px',
  lineHeight: '16px',
  fontWeight: '500',
  color: '#FFFFFF',
  padding: '5px 7px',
})
