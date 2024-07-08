import { useEffect } from 'react'

const BackToTop = () => {
    const top = {
        position: 'fixed',
        right: '10%',
        bottom: '10%',
        cursor: 'pointer',
        transition: '0.5s ease',
        display: 'none',
        zIndex: 99,
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 500) {
                document.querySelector('.back_to_top').style.display = 'block'
            } else {
                document.querySelector('.back_to_top').style.display = 'none'
            }
        })
    })

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior:'smooth' })
    }


  return (
    <div>
        <div className="back_to_top" style={top} >
            <div className="top">
                <div className="icon" onClick={scrollToTop}>
                    <box-icon name='chevron-up-circle' size='lg' type='solid' color='#0000ff' ></box-icon>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BackToTop