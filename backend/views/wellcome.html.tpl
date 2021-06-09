<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Bienvenido {{ firstname }}</title>
    <style>
      /* -------------------------------------
          GLOBAL RESETS
      ------------------------------------- */
      /*All the styling goes here*/
      img {
        border: none;
        -ms-interpolation-mode: bicubic;
        max-width: 100%;
      }
      body {
        background-color: #f6f6f6;
        font-family: sans-serif;
        -webkit-font-smoothing: antialiased;
        font-size: 14px;
        line-height: 1.4;
        margin: 0;
        padding: 0;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }
      table {
        border-collapse: separate;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        width: 100%; }
        table td {
          font-family: sans-serif;
          font-size: 14px;
          vertical-align: top;
      }
      /* -------------------------------------
          BODY & CONTAINER
      ------------------------------------- */
      .body {
        background-color: #f6f6f6;
        width: 100%;
      }
      /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
      .container {
        display: block;
        margin: 0 auto !important;
        /* makes it centered */
        max-width: 580px;
        padding: 10px;
        width: 580px;
      }
      /* This should also be a block element, so that it will fill 100% of the .container */
      .content {
        box-sizing: border-box;
        display: block;
        margin: 0 auto;
        max-width: 580px;
        padding: 10px;
      }
      /* -------------------------------------
          HEADER, FOOTER, MAIN
      ------------------------------------- */
      .main {
        background: #ffffff;
        border-radius: 3px;
        width: 100%;
      }
      .wrapper {
        box-sizing: border-box;
        padding: 20px;
      }
      .content-block {
        padding-bottom: 10px;
        padding-top: 10px;
      }
      .footer {
        clear: both;
        margin-top: 10px;
        text-align: center;
        width: 100%;
      }
        .footer td,
        .footer p,
        .footer span,
        .footer a {
          color: #999999;
          font-size: 12px;
          text-align: center;
      }
      /* -------------------------------------
          TYPOGRAPHY
      ------------------------------------- */
      h1,
      h2,
      h3,
      h4 {
        color: #000000;
        font-family: sans-serif;
        font-weight: 400;
        line-height: 1.4;
        margin: 0;
        margin-bottom: 30px;
      }
      h1 {
        font-size: 35px;
        font-weight: 300;
        text-align: center;
        text-transform: capitalize;
      }
      p,
      ul,
      ol {
        font-family: sans-serif;
        font-size: 14px;
        font-weight: normal;
        margin: 0;
        margin-bottom: 15px;
      }
        p li,
        ul li,
        ol li {
          list-style-position: inside;
          margin-left: 5px;
      }
      a {
        color: #3498db;
        text-decoration: underline;
      }
      /* -------------------------------------
          BUTTONS
      ------------------------------------- */
      .btn {
        box-sizing: border-box;
        width: 100%; }
        .btn > tbody > tr > td {
          padding-bottom: 15px; }
        .btn table {
          width: auto;
      }
        .btn table td {
          background-color: #ffffff;
          border-radius: 5px;
          text-align: center;
      }
        .btn a {
          background-color: #ffffff;
          border: solid 1px #3498db;
          border-radius: 5px;
          box-sizing: border-box;
          color: #3498db;
          cursor: pointer;
          display: inline-block;
          font-size: 14px;
          font-weight: bold;
          margin: 0;
          padding: 12px 25px;
          text-decoration: none;
          text-transform: capitalize;
      }
      .btn-primary table td {
        background-color: #3498db;
      }
      .btn-primary a {
        background-color: #3498db;
        border-color: #3498db;
        color: #ffffff;
      }
      /* -------------------------------------
          OTHER STYLES THAT MIGHT BE USEFUL
      ------------------------------------- */
      .last {
        margin-bottom: 0;
      }
      .first {
        margin-top: 0;
      }
      .align-center {
        text-align: center;
      }
      .align-right {
        text-align: right;
      }
      .align-left {
        text-align: left;
      }
      .clear {
        clear: both;
      }
      .mt0 {
        margin-top: 0;
      }
      .mb0 {
        margin-bottom: 0;
      }
      .preheader {
        color: transparent;
        display: none;
        height: 0;
        max-height: 0;
        max-width: 0;
        opacity: 0;
        overflow: hidden;
        mso-hide: all;
        visibility: hidden;
        width: 0;
      }
      .powered-by a {
        text-decoration: none;
      }
      hr {
        border: 0;
        border-bottom: 1px solid #f6f6f6;
        margin: 20px 0;
      }
      /* -------------------------------------
          RESPONSIVE AND MOBILE FRIENDLY STYLES
      ------------------------------------- */
      @media only screen and (max-width: 620px) {
        table[class=body] h1 {
          font-size: 28px !important;
          margin-bottom: 10px !important;
        }
        table[class=body] p,
        table[class=body] ul,
        table[class=body] ol,
        table[class=body] td,
        table[class=body] span,
        table[class=body] a {
          font-size: 16px !important;
        }
        table[class=body] .wrapper,
        table[class=body] .article {
          padding: 10px !important;
        }
        table[class=body] .content {
          padding: 0 !important;
        }
        table[class=body] .container {
          padding: 0 !important;
          width: 100% !important;
        }
        table[class=body] .main {
          border-left-width: 0 !important;
          border-radius: 0 !important;
          border-right-width: 0 !important;
        }
        table[class=body] .btn table {
          width: 100% !important;
        }
        table[class=body] .btn a {
          width: 100% !important;
        }
        table[class=body] .img-responsive {
          height: auto !important;
          max-width: 100% !important;
          width: auto !important;
        }
      }
      /* -------------------------------------
          PRESERVE THESE STYLES IN THE HEAD
      ------------------------------------- */
      @media all {
        .ExternalClass {
          width: 100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
          line-height: 100%;
        }
        .apple-link a {
          color: inherit !important;
          font-family: inherit !important;
          font-size: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
          text-decoration: none !important;
        }
        #MessageViewBody a {
          color: inherit;
          text-decoration: none;
          font-size: inherit;
          font-family: inherit;
          font-weight: inherit;
          line-height: inherit;
        }
        .btn-primary table td:hover {
          background-color: #34495e !important;
        }
        .btn-primary a:hover {
          background-color: #34495e !important;
          border-color: #34495e !important;
        }
      }
    </style>
  </head>
  <body class="">
    <span class="preheader">Has recibido un nuevo email desde Swim Betters.</span>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
      <tr>
        <td>&nbsp;</td>
        <td class="container">
          <div class="content">

            <!-- START CENTERED WHITE CONTAINER -->
            <table role="presentation" class="main">

              <!-- START MAIN CONTENT AREA -->
              <tr>
                <td class="wrapper">
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <p>Bienvenido {{firstname }} a Swim Better. Intentaremos darte los mejores entrenos de natación.</p>
                        <p>No de olvides de disfrutar semanalmente de nuestros entrenos.</p>
                        <p>&nbsp;</p>
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
                          <tbody>
                            <tr>
                              <td align="left">
                                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                  <tbody>
                                    <tr align="center" style="background-color: #121618;">
                                      <td><img src="data:image/png;base64,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" alt="Pizza Delicious" /></td>
                                    </tr>
                                    <tr>
                                      <td> <a href="{{public_domain}}" target="_blank">Mejora Nadando!</a> </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <p>This is a really simple email template. Its sole purpose is to get the recipient to click the button with no distractions.</p>
                        <p>Good luck! Hope it works.</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

            <!-- END MAIN CONTENT AREA -->
            </table>
            <!-- END CENTERED WHITE CONTAINER -->

            <!-- START FOOTER -->
            <div class="footer">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="content-block">
                    <span class="apple-link">Españita</span>
                  </td>
                </tr>
                <tr>
                  <td class="content-block powered-by">
                    Powered by <a href="{{public_domain}}">Swim Better</a>.
                  </td>
                </tr>
              </table>
            </div>
            <!-- END FOOTER -->

          </div>
        </td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </body>
</html>
