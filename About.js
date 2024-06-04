// import React from "react";
// import Layout from "./../components/Layout/Layout";

// const About = () => {
//   return (
//     <Layout>
//       <div className="row contactus ">
//         <div className="col-md-6 ">
//           <img
//             src="/images/about.jpeg"
//             alt="contactus"
//             style={{ width: "100%" }}
//           />
//         </div>
//         <div className="col-md-4">
//           <p className="text-justify mt-2">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
//             officiis obcaecati esse tempore unde ratione, eveniet mollitia,
//             perferendis eius temporibus dicta blanditiis doloremque explicabo
//             quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
//             accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
//             commodi illum quidem neque tempora nam.
//           </p>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default About;



import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to SJ Jewllers website, where elegance meets craftsmanship. Our passion for exquisite jewelry drives us to curate a collection that celebrates beauty in every form.

At SJ Jewllers, we believe that jewelry is not just an accessory but a reflection of your unique style and personality. Each piece in our collection is carefully handpicked or meticulously crafted to ensure the highest quality and timeless appeal.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;