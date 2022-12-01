// import logo from './logo.svg';
import './App.css';


function Category() {
  // let myVariable= 44;
  const Images = [

    { name: 'Tops', Category:"abc", href: '#', current: false,img: "./Images/smartwatch1.jpg" },
    { name: 'Bags', href: '#', current: false ,img: "./Images/earbud.png"},
    { name: 'Jewelry', href: '#', current: false,img: "./Images/iphone11.jpg" },
    { name: 'Shoes', href: '#', current: true, img: "./Images/smartwatch.jpg" },
    { name: 'Tops', href: '#', current: false,img: "./Images/smartwatch1.jpg" },
    // { url: "http://localhost:3000/carousel-img/img1.jpg", title: "beach" },
    // { url: "http://localhost:3000/carousel-img/img2.jpg", title: "boat" },
    // { url: "http://localhost:3000/carousel-img/img3.jpg", title: "forest" },
    // { url: "http://localhost:3000/carousel-img/img4.jpg", title: "city" },
    // { url: "http://localhost:3000/carousel-img/img5.jpg", title: "italy" },
];
  return (

 
   <>
    <div className="container my-12 mx-auto px-4 md:px-12">
    <div className="flex flex-wrap -mx-1 lg:-mx-4">

        {/* <!-- Column --> */}
        {Images.map((item)=>(
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">

            {/* <!-- Article --> */}
            <article className="overflow-hidden rounded-lg shadow-lg">
            
                <div>
             <a href="#">
             <img alt="Placeholder" className="block h-auto w-full" src={item.img}/>
            </a>
            
            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <a className="no-underline hover:underline text-black" href="#">
                            Article Title
                        </a>
                    </h1>
                    <p className="text-grey-darker text-sm">
                        11/1/19
                    </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <a className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" className="block h-8 w-8 rounded-full" src={item.img}/>
                        <p className="ml-2 text-sm">
                            Author Name
                        </p>
                    </a>
                    <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart"></i>
                    </a>
                </footer>
            </div>
           
               


            </article>
            {/* <!-- END Article --> */}

        </div>
         ))}
        {/* <!-- END Column -->

        <!-- Column --> */}
      


    
        {/* <!-- Column --> */} 
         {/* <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            
            <article className="overflow-hidden rounded-lg shadow-lg">

                <a href="#">
                    <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random"/>
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <a className="no-underline hover:underline text-black" href="#">
                            Article Title
                        </a>
                    </h1>
                    <p className="text-grey-darker text-sm">
                        11/1/19
                    </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <a className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random"/>
                        <p className="ml-2 text-sm">
                            Author Name
                        </p>
                    </a>
                    <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart"></i>
                    </a>
                </footer>

            </article>
          

        </div>  */}
        {/* <!-- END Column --> */}

    </div>
</div>
          </>
   
  );
}

export default Category;
