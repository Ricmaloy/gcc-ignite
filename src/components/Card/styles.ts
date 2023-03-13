import styled from 'styled-components'

export const Container = styled('div')({
  maxWidth: '280px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  padding: '3px',
  borderRadius: '20px',
  backgroundColor: '#FFFFFF',
  overflow: 'hidden',

  ':hover': {
    backgroundColor: '#0D3B66',

    div: {
      backgroundColor: '#0D3B66',
    },

    p: {
      color: '#FFFFFF',
    },
  },
})

interface TypeIconProps {
  type: 'dog' | 'cat'
}

export const TypeIcon = styled('div')<TypeIconProps>({
  width: '48px',
  height: '48px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  marginTop: '-30px',
  padding: '2px',
  borderRadius: '10px',
  overflow: 'hidden',
  backgroundColor: '#FFFFFF',

  div: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 'inherit',
  },

  img: {
    width: '15px',
  },
})

export const PetImage = styled('div')({
  objectFit: 'cover',

  img: {
    width: '100%',
  },
})

export const Name = styled('p')({
  fontSize: '18px',
  lineHeight: '21.6px',
  fontWeight: '700',
  margin: '8px auto 17px',
  color: '#0D3B66',
})
