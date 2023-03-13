import styled from 'styled-components'

export const Container = styled('div')({
  display: 'flex',
})

export const Content = styled('div')({
  flex: 1,
  backgroundColor: '#FDECED',
  padding: '154px 32px 50px',

  height: '100vh',
  overflowY: 'scroll',
})

export const Header = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '46px',

  p: {
    fontSize: '20px',
    lineHeight: '34px',
    fontWeight: '400',
    color: '#0D3B66',
  },
  span: {
    fontWeight: '800',
  },
})

export const SelectWrapper = styled('div')({
  position: 'relative',

  '> img': {
    position: 'absolute',
    right: '18px',
    top: '50%',
    transform: 'translateY(-50%)',
  },
})

export const HeaderSelect = styled('select')({
  width: '210px',
  height: '48px',
  padding: '14px 18px',
  border: 'none',
  borderRadius: '15px',
  backgroundColor: '#FBE1E2',
  outline: 'none',
  appearance: 'none',

  fontFamily: 'Nunito',
  fontSize: '16px',
  color: '#0D3B66',
})

export const Display = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(280px, 1fr))',
  gridGap: '32px',
})
