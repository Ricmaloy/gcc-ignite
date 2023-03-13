import styled from 'styled-components'

export const Container = styled('aside')({
  width: '392px',
  height: '100vh',
  backgroundColor: '#F15156',
})

export const AsideHeader = styled('div')({
  height: '241px',
  backgroundColor: '#E44449',

  img: {
    width: '45px',
  },

  '> div': {
    padding: '81px 56px 26px',
    display: 'flex',
    flexDirection: 'column',
    gap: '26px',
  },
})

export const HeaderInput = styled('div')({
  display: 'flex',
  gap: '12px',

  input: {
    width: '203px',
    height: '60px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    padding: '21px 16px',
    borderRadius: '15px',
    background: 'transparent',
    border: '1px solid #F15156',
    outline: 'none',

    '::placeholder': {
      color: '#F2F2F2',
    },
  },

  button: {
    width: '60px',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#F4D35E',
    border: 'none',
    borderRadius: '20px',
    transition: 'filter 0.2s',

    img: {
      width: '22px',
    },

    '&:hover': {
      filter: 'brightness(0.9)',
    },
  },
})

export const AsideContent = styled('div')({
  height: 'calc(100vh - 241px)',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  padding: '35px 56PX',
})

export const ContentHeader = styled('h1')({
  fontSize: '20px',
  lineHeight: '34px',
  marginBottom: '27px',
})

export const ContentFilters = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
})
