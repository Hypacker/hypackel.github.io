import React from "react";

function Contact() {
  return (
    
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Contact</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi autem ipsum vel corrupti magnam enim et ex dignissimos iusto. Sed odio itaque expedita voluptas at magni deleniti quidem! Nemo ab aut totam laborum inventore optio blanditiis numquam excepturi asperiores. Dolore sit laboriosam obcaecati temporibus magnam soluta vel, placeat qui illum dolores aperiam deleniti in officiis minus ipsam unde iste commodi numquam nulla pariatur! Iste facere impedit, nihil perspiciatis eos minus harum inventore optio aut dolor corrupti, consectetur, quos ut ad.
            </p>
            <form action="">
            <input placeholder="he" required type="text" />
            <input type="submit" value="Submit" />
            </form>
            

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;