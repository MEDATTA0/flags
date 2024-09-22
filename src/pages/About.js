import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";

const About = () => {
  const about_text = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam sit hic
        doloremque. Optio atque autem sed vitae est? Cupiditate odit aliquid
        molestiae facilis ullam eos excepturi nisi a, dolorem quidem! Eos
        tempore voluptates et facere. Doloremque suscipit id temporibus quisquam
        quam possimus. Dolorum nam cum quae eius eaque nulla exercitationem
        vitae. Quisquam numquam, obcaecati perspiciatis voluptatum fugit sed
        voluptate error. Alias libero eius fugiat architecto ab maxime dicta,
        cupiditate quaerat perferendis, labore repudiandae mollitia, voluptatum
        totam corrupti neque! Sed possimus obcaecati maxime illo odit minima,
        accusamus tempore facilis repellat eius? Reprehenderit, eos alias.
        Corrupti dolores atque ab molestias quam tenetur, deserunt adipisci
        temporibus repellat nobis at exercitationem ad repudiandae accusamus
        amet commodi alias veniam deleniti! Quas inventore dolor facilis? Ipsam.
        Tempore non quos amet? Recusandae corrupti eum soluta, quae, culpa
        asperiores odit dolor accusantium vero quasi velit cum iste blanditiis
        suscipit deleniti, voluptate perspiciatis architecto incidunt natus
        voluptas iusto veritatis. Inventore tenetur placeat eligendi facilis
        fugit, laborum, perspiciatis atque et, maxime porro in quo perferendis
        dignissimos! Magnam commodi in, ex molestiae voluptatum, praesentium
        dolorem beatae quae dolores aspernatur hic accusamus? Pariatur, voluptas
        exercitationem! Fugiat deleniti consectetur doloribus laudantium aliquam
        minus id aperiam molestiae voluptate asperiores, odio odit quos ipsa
        quidem obcaecati! Sit placeat temporibus laudantium consequuntur qui
        suscipit, animi maiores? Explicabo, tempora. Error, officiis quo
        quaerat, labore laborum sequi consequatur, rerum odio distinctio fugit
        atque hic ex possimus nemo voluptate. Pariatur fugiat ea nulla id eaque
        error vel porro vero. Repudiandae labore voluptas quas saepe totam at
        quos maxime minus, sapiente iusto, voluptates corporis earum, harum
        eligendi quam natus beatae veniam recusandae velit obcaecati! Totam,
        doloremque. Doloribus nobis vero labore. Repudiandae magnam enim facere,
        quas fugiat iste animi quis, eligendi modi quam cupiditate sunt qui
        temporibus eius ab provident maxime atque recusandae cum, alias culpa
        pariatur ipsam amet. Aliquid, doloribus?`;
  return (
    <div>
      <Logo />
      <Navigation />
      <h1>A propos</h1>
      <br />
      <p>{about_text}</p>
      <br />
    </div>
  );
};

export default About;
