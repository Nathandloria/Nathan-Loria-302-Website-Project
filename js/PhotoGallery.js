function Image(src, alt) {
  "use strict";
  this.src = src;
  this.alt = alt;
}
(function() {
  "use strict";
  var images = [
    new Image("https://lh3.googleusercontent.com/eKLQuSabPIrRJL6Kau8dpxBLwKKwcVK_DQIYdLRi5I2VQH4iD4wpt29U4gVlUmEHj3tXjnw5aZBtNqPw8VNWp7QFR-0f7hmSEOKwnlDX-tH8fWi2pdQalnmIgtUAb1VTQexlpmBuH6Y=w2400", "Frisbee Image"),
    new Image("https://lh3.googleusercontent.com/tCq6LTh0PuUMErWjHljaMsNreu71q3qVlcskAmm7yJMs1loaZaYc3yOv5NOIlwyjCCOSNER6AIvOcWo5IpI-1hR7WUMVskBxxARLCqXY2GUKvVfYniIVl3zpJCgta6Ghd69ykLsqPQo=w2400", "Frisbee Image"),
    new Image("https://lh3.googleusercontent.com/BmbdHc1pPTdsPdj5gQyAaaWrEPBF5QCtP8vSNn9v60NkUpauYvvjUEMKhFVcxMwYo5LTnqD63NdwZb1vDMD7fl27prLa5C5Fgbr77XbsIPlZ29tZ0cEr74kziY-PRvdy0m33Aato8-w=w2400", "Frisbee Image"),
    new Image("https://lh3.googleusercontent.com/Plh8VR9ru6tPvm8KEIde4gAWxjT9HoKQzV96IgLadqWdUSVObTXmszaB2GTdkcJ223HmMdc_T2D0qOFrEnI-vld-N0ANyV6DXUeYj7WLLcRms3wsCSZXcHGWLnDzxko9vYm9DyE9ba0=w2400", "Frisbee Image"),
    new Image("https://lh3.googleusercontent.com/6kfbla_cLS0VkCcSzPJaVBOb1KzR9Prg0NkkqDy95eivYPh9vGL6o1QZTTsqUS8_JBn9I7DdZpMN3crkbeg5Yw1snxoMwuFGF8fFTM30U1Wuhdc7xE83XYbohX8TKCxRvs2F_66bgis=w2400", "Frisbee Image"),
    new Image("https://lh3.googleusercontent.com/GQMR77lVr8waEgdDTNZaI8tWG7bqz_2SnSRka5Cjh7BZaFQt6s09IjMmpPo1y87Ri_yx1CClm1Dn2bOwJHSjmOtYZq03RYsmU8iNxTqFPlANV294AXQdghBWCE5PsIj8IFgSGXrFkUs=w2400", "Frisbee Image"),
    new Image("https://lh3.googleusercontent.com/pB6Utz14Jfib6CICKi1-XEApBZoUoGVbmf4Bse4E8G6PAGLeKVOjgbcRg96a2XABRTRyWDgyyi4__QVROhmUC8wQ5wy7wT5jOW-B08yDtzfoGHekikvVhNYhQeCoUlw0Y5tk5sR0LYQ=w2400", "Frisbee Image"),
    new Image("https://lh3.googleusercontent.com/4VsQ4n-qkZNTvpw0qk-TPiUDu5QoRKuUZVgZ-PFCFB3FMN4kHP7Mxu8TnaO_9tUgWP08TrwiRwxVQIa-Ft7IUaCsgpH9Ewlti_AVAJi59EstMtcTvRMzGZYDwuNPh8P-KXTf5AbWHqg=w2400", "Frisbee Image"),
    new Image("https://lh3.googleusercontent.com/ZA59HFmmAMr97X2EpWnLE_HqesHmv-M_JTo2E5opGlk3Izn5pcNCkoXbUqNAg7twyQOP5EV-O35iiA_2kL7F7-7vmeb7RjYSnF21vvnKc9OR2f5JCVtjjzgbXCDRcobh2RM-Wbkrxls=w2400", "Frisbee Image"),
    new Image("https://lh3.googleusercontent.com/Lhjejqpw4e_CWBWTurY0X9BI2SsJBxnSRrIjH6yTOetLe-BX-jr96PyVN8AXRvkdNacyBzhYLOypBExZ2_-4g3eXEGAmbmdnnSsPCju7o3nxZ53uYfG64uMk_9RiAI7nzrIEo0T17Qc=w2400", "Frisbee Image"),
    new Image("https://lh3.googleusercontent.com/oUNmYJztp1ACskR0GwEv4Dc0kDbHmV_OHYW41rDV20GZz_X3rp9EAeMXvDcorklkhPVtlteY2iVS52cuHsIVXq1Un4AqK4tAP01zmbJLeuhnRrjWB9phUxvLxGNFMvnI-MdaLbxO4qk=w2400", "Frisbee Image"),
    new Image("https://lh3.googleusercontent.com/hJblXk5kFEYv0RCxuTCdeC_RTr9GSzHEEi7RqU3eHgsibJMbupk8JqQ86bjrYDhVRRQrB1gL2QbG9gfHpNYob82siP5wmYN8PC4i62ZWyBWIgGpnOrsHKS5Ur8a1hFbKtE8lxhK4xfk=w2400", "Frisbee Image"),
    new Image("https://lh3.googleusercontent.com/cfiCqAaXSk4w41X6YhiotzpL8ryu2tR12ECjbZ7ovrLsUdCD9_sZTxnOluezEnUvR2iWf9ajksmQqT_v_40hQ-0dP4OJFEuThRp1a51mOshLiIkpFQnJx7uDewa8tZ_ZFlr4HP_dkO8=w2400", "Frisbee Image"),
    new Image("https://lh3.googleusercontent.com/JD8-g8HPI5o0B_veP-Ntek5D72CtL-6umr0z05g1I88wd-Gbrkge-cyzaINnxObPXgWPptZXNVihM1fj_4LnAQYAHEg2x7BAR6QLV-Ox7JwHQs8WwwlcvzJmJ0fdCAh3_2ggvjkthtA=w2400", "Frisbee Image"),
    new Image("https://lh3.googleusercontent.com/cJ1y1KofS45Eze8JBU2lLPOpvA76S7skrxOW4L8bP2z4nO_HAmwdCLX-cbE9tNTH6NmrW0l3ebpmDiFdjZfHlko_LE65pb_FCuzUkPKdcgYH--pAfQJeJCY7PbZ9kX0w77e9eMK6_J8=w2400", "Frisbee Image"),
    new Image("https://lh3.googleusercontent.com/OwJW8kubvrAGM9ANNkHt7coIleXs0lzjAmMzzTQQwi-dfMXeGtVl_rGZKyLvitL2OpLxfBWGNWD-E-VjT1U7UOb1mooBlan6K11RdYo47D5SWU0dss7N_DkNqTIkVm5pB-63dCfEaHw=w2400", "Frisbee Image"),
    new Image("https://lh3.googleusercontent.com/owMhq7CErxDu3Da2g_nYWsC5GCob4-ZPZnK380TnyQfHYoQhAiPy8U4wRNQWmIJdtB47QLf8fphMlSMxAQaiWuSIy5KJ8soTuttZQ-WBqYprEA10AYkaNhGNnKIUqj6txgPDn7i93w8=w2400", "Frisbee Image"),
    new Image("https://lh3.googleusercontent.com/Q0OaMG8lYYX0xWZDTcvbzeU6Ed-rYl9U24h0St-CQWI_y-HKELm5CrB8tgAo3vIGhYM570Lx0jgoxDe7azfzoSJiI5-IxoIqEQY6EnfR89OInlycQtCCo9CpXEMN8I0w-1-OUwOaz3E=w2400", "Frisbee Image"),
    new Image("https://lh3.googleusercontent.com/fWgMsQgPb25zI8HnuWAtCoZPDA9v6LLjaCIMo6lsh9vn6OzGm0oGWl8DUeLejXFEw6PSkylxiLJxD1NUx5iFlHvlrZZAXRq3L-z6CEb1Ja_7pSIYVzJTB6Y4gJPzjOXDYwSOCSYmdJA=w2400", "Frisbee Image"),
    new Image("https://lh3.googleusercontent.com/sGqu-N1ucp9VPr6ntnXbiVsPKN6S-8cJR72r3BLyh9yPoSDM20U2_MZtT0kW91zws_p6VETf_w7tUEUsMIJspyvsfEoNaEJaffu4PATXotircxUIAC2TYXR-TndhS2tO9R0yTrHAA9Q=w2400", "Frisbee Image"),
    new Image("https://lh3.googleusercontent.com/Wyrh6WekzeNZ8cqTHF92CsZr6Ga1z3MMbKDt7bM1qzoTXw2BGx5UzMelvt3PzpIDZmEHhDxvx4ksiv0sqwTxlUyt046VkLW1SvMcCkCVxq0JB9eJ4DmmS9NyhWHwDQiQCR6MN5q0OOU=w2400", "Frisbee Image"),
    new Image("https://lh3.googleusercontent.com/b-R1VXhzl3kZReTxvCO1AT6y6zNtZs6xSG7qLp-8JWmnvv6DRC_q3eYijm86kMxiX_AZt1yCziu6jci1vxLPyeAlz3rbqy4wbeNyIIjRhBlGqrwAvhmpIinl6D2F154wlUle8lgJNwk=w2400", "Frisbee Image"),
    new Image("https://lh3.googleusercontent.com/SGMcjgt4wUE-e22qpyoMlw1AZpkeubb7pf-liMzXbd4vLRlapFJk4STWKvjmgK8hHDhY2OtFu2cSVRGRE8KqrvXNff2iLpa01M1FOTQEyBshfBC1nVW8FMhEsCisoMLLLMCkysn4xXk=w2400", "Frisbee Image"),
    new Image("https://lh3.googleusercontent.com/AF5ZthN_ewmUZIeJqSq4fRpr-tlTDlRDkQoeIlAOrcdfDekX0223zufabN2RVpiMuX6Kh5a95qkLdlQ7-YcFFq4O6-UKDsCyQof-h0gm6-iX_F9R7S5CN-XkL9vOpuOaCYvQcehpwic=w2400", "Frisbee Image"),
    new Image("https://lh3.googleusercontent.com/SMUPNf-O2ykWrt4WvMM9nKIGzDKKn6DVwW-ldUjT1cT3y538LBtytLqXGrkEHZOJdm7B9x3IzQR0S054vj29gO6R4rjPUJ5fp1Wl2Djkhhq8TVzgYV_z7KwD_mkzRcA_gFVRj3YMFl4=w2400", "Frisbee Image"),
    new Image("https://lh3.googleusercontent.com/VPXEmInSY31UIjIf_pfNLBNNq0XBxxWLpn4a9Zqo725QOB573K81L4meeSgV6yuUu843BHwRhK0x9UqMnG0utp6VtZ3gN1bCh40JzidSQWOkUHlKVOt4xd66ejH7TSlizC6CEEzZvUQ=w2400", "Frisbee Image"),
    new Image("https://lh3.googleusercontent.com/6ywi8UnvKA0hGGb9AgYGjtAGfEuq4Xbd0dbHFQLqW3gjKdfkhxaJdECFmRHNMfUrjYaELClcWn0WWIIlYg8SM_6Mq4hgTl3jwnp5kwC37zow90BAMOfHr9hC4OCqXt0dCDLtGPChbBE=w2400", "Frisbee Image"),
    new Image("https://lh3.googleusercontent.com/xU-2hWpK3pytrRJu3mfSXQeDK5D5ILHNDjCahAwNlGHe4FLZW_N83uhJMhsq-pb7NtneToB4l5nmD_edWWtitdLmweJP8Y4F_MnMnTa8VtIS5Z5Jm-ZixKw9VSqmEZDaiiMoWOnQ0cY=w2400", "Frisbee Image")
  ];
  for (var i = 0; i < images.length; i++) {
    var pic = images[i];
    document.write("<button type='button' class='gallery' data-toggle='modal' data-target='#myModal" + i + "'>");
    document.write("<img id='img' class='galleryimg' src='" + pic.src + "' alt='" + pic.alt + "'>");
    document.write("</button>");
    document.write("<div id='myModal" + i + "' class='modal fade' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>");
    document.write("<div class='modal-body'>");
    document.write("<img src='" + pic.src + "' class='img-responsive'>");
    document.write("</div>");
    document.write("</div>");
  }
})();
