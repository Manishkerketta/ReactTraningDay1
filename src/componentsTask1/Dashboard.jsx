 
// Create a Dashboard component that contains three sub-components: Sidebar, MainContent, and StatusFooter.
 function Sidebar(){
 return(<h1>Side Bar</h1>)
}
function MainContent(){
 return(<h1>Main Content</h1>)
}
function StatusFooter(){
     return(<h1>Status Footer</h1>)

}


export default function Dashboard(){
return(<><Sidebar></Sidebar>
        <MainContent></MainContent>
        <StatusFooter></StatusFooter>
</>)
}