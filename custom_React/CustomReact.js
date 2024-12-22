 function customRender(reactElement, container){
    // const domElement= document.createElement(reactElement.type) 
    // domElement.innerHTML= reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    // container.appendChild(domElement);

    // ------MODULAR FUNCTION USING THE FOR LOOP 

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children 
    for(const prop in reactElement.props) {
        if(prop === 'children')continue;
        domElement.setAttribute(prop, reactElement.props [prop])
    }
    container.appendChild(domElement)

 }

//  these is showing how the html element will look by the react library in a tree like 
//  structure 
 const reactElement = {
    type: 'a',
    props:{
        href: 'https://google.com',
        target:'_blank'
    },
    children: 'click here to visit the google '
 }

 
 const mainContainer = document.querySelector('#root');

customRender(reactElement , mainContainer);


