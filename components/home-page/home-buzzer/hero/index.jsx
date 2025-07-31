import Hero1 from "../../home-1/Hero";
import HeroContent from "./HeroContent";
import HeroGallery from "./HeroGallery";
import Partners from "./Partners";
import ProductTabs from "./ProductTabs";
import List from "./List";



const index = () => {
  return (
        <div className="row">
          
          <div className="col-lg-12 col-md-12" data-aos="fade-up">
          {/* 
        =============================================
        Feature Section Four
        ============================================== 
        */}
        <div
              className="col-xxl-7 col-md-8 m-auto text-center"
              data-aos="fade-up"
            >

              {/* /.title-style-three */}
              <h2>
               KOL & Influencer Indonesia
              </h2>
            </div>
            
      <div className="fancy-feature-four pt-25 lg-pt-25">
      <div class="row m-auto ">
        <List />
        </div>
            
          {/* End .row */}

          <ProductTabs />

          {/* /.tab-content */}
        {/* /.container */}
      </div>

      </div>
      {/* /.container */}

      
      {/* /.image-gallery */}

      
      {/* /.partner-section-five */}
    </div>
  );
};

export default index;
