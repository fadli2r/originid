const buzzer = [
    {
      id: 1,
      icon: "/images/buzzer/za.jpeg",
      title: "1-click installation",
      description: "RAte : 100k +",
      delayAnim: "100",
    },
    {
      id: 2,
      icon: "/images/buzzer/zt.jpeg",
      title: "Domain name setup",
      description: "RAte : 100k +",

      delayAnim: "200",
    },
    {
      id: 3,
      icon: "/images/buzzer/za.jpeg",
      title: "24/7 network security",
      description: "RAte : 100k +",
      delayAnim: "300",
    },
    {
      id: 4,
      icon: "/images/buzzer/zi.jpg",
      title: "Easy-to-use control panel",
      description: "RAte : 100k +",

      delayAnim: "100",
    },
    {
      id: 5,
      icon: "/images/buzzer/za.jpeg",
      title: "Resources on-demand",
      description: "RAte : 100k +",

      delayAnim: "200",
    },
    {
      id: 6,
      icon: "/images/buzzer/zi.jpg",
      title: "Global Data Centers",
      description: "RAte : 100k +",
      delayAnim: "300",
    },
  ];
  
  const List = () => {
    return (
      <>
        {buzzer.map((list) => (
          <div
            className="col-6 col-md-3 picky"
            key={list}>
          <div className="card borde" >
          <div class=" lazy-img ">
          <img src={list.icon} className="center-cropped" alt="illustration"/>

          </div>

              <div class="card-body">
              <div class="r-shape-two rounded-circle position-absolute"></div>
                <h5 class="card-title tx-dark hides">{list.title}</h5>
                  <p class="card-text">{list.description}</p>
                <a href="#" class="btn btn-primary jia">Book Now</a>
            </div>
            <div class="card-body" style={{paddingTop:0}}>

            <div>
              <a href="#">instagram</a>
            </div>
            <div>
              <a href="#">followers</a>
            </div>
            </div>
          </div>
            {/* /.card-style-eleven */}
          </div>
        ))}
      </>
    );
  };
  
  export default List;
  