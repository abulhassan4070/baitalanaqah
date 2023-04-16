export default function NewsLetter() {
  return (
    <div class="newsletters-wrps clearfix">
      <div class="newsletters-bgright"></div>
      <div class="container animatedParent clearfix">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <div class="newstitle-tx text-right animated fadeInLeft go">
              Subscribe our
              <span>NEWSLETTER</span>
            </div>
          </div>
          <div
            class="col-lg-8 col-md-8 col-sm-8 col-xs-12 pull-right animated fadeInRight go"
          >
            <div class="newsform-sub" id="NewsletterDiv">
              <div class="row">
                <div class="col-lg-5 col-md-4 col-sm-6 col-xs-12">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter your name"
                    id="NewsName"
                  />
                </div>
                <div class="col-lg-5 col-md-4 col-sm-6 col-xs-12">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter your mail id"
                    id="Newsletter"
                  />
                </div>
                <div class="col-lg-2 col-md-4 col-sm-12 col-xs-12">
                  <button
                    type="button"
                    class="btn-subscribe btn btn-primary btn-block"
                    id="NlClick"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
