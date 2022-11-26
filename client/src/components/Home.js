import BookContainter from "./BookContainter";
import styled from 'styled-components'

function Home({books}){



return(<div>
    
    <BookContainter books={books} />
    {/* <Image /> */}
</div>
)
}
export default Home; 
const Image = styled.img.attrs(() => ({
    src:'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80', 
  }))`
    position: flex;
    z-index:-1;
  `