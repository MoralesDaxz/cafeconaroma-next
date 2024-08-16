"use client";
import React, { FC, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
type Props = {
  setCaptchaValue: (value: string | null) => void;
};
const RecaptchaGoogleV2: FC<Props> = ({ setCaptchaValue }) => {
  const KEY_RECAPTCHA = process.env.NEXT_PUBLIC_URL_RECAPTCHA;
  /*  const [captchaValue, setCaptchaValue] = useState<string | null>(null); */
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  return (
    <>
      <ReCAPTCHA
        ref={recaptchaRef}
        size="compact"
        sitekey={KEY_RECAPTCHA!}
        onExpired={() => setCaptchaValue(null)}
        onChange={() => setCaptchaValue("NO_null")}
        theme="light"
      />
    </>
  );
};

export default RecaptchaGoogleV2;
