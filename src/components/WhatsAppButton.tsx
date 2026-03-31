const WhatsAppButton = () => {
  const whatsappLink = "https://wa.me/542915663536?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20Kairon%20Studio";
  
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-[58px] h-[58px] bg-[#25D366] rounded-full shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 hover:scale-110 group"
      aria-label="Contactar por WhatsApp"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="text-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.403 5.597A7.9 7.9 0 0012.053 3c-4.437 0-8.048 3.612-8.048 8.048 0 1.421.37 2.814 1.072 4.042L3.9 20.1l4.958-1.158a8.034 8.034 0 003.848.976h.003c4.437 0 8.048-3.612 8.048-8.048a7.977 7.977 0 00-2.354-5.673zM12.053 18.57h-.003a6.68 6.68 0 01-3.4-.931l-.244-.144-2.527.588.536-2.463-.157-.258a6.68 6.68 0 01-1.023-3.565c0-3.688 3.001-6.689 6.69-6.689a6.637 6.637 0 014.718 1.957 6.637 6.637 0 011.956 4.718c-.004 3.688-3.005 6.687-6.69 6.687z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.383 8.377c-.147-.327-.302-.334-.439-.34-.114-.006-.245-.006-.376-.006-.13 0-.343.049-.523.245-.18.196-.688.673-.688 1.641 0 .968.706 1.902.805 2.034.099.131 1.393 2.24 3.463 3.099 1.714.715 2.064.572 2.436.536.372-.036 1.245-.509 1.418-.999.173-.49.173-.911.121-.999-.052-.088-.183-.14-.376-.245-.193-.105-1.179-.582-1.362-.649-.183-.066-.314-.099-.445.099-.131.196-.509.648-.623.781-.114.131-.228.147-.421.052-.193-.099-.815-.3-1.553-.959-.574-.513-.962-1.146-1.076-1.34-.114-.196-.012-.302.085-.397.087-.087.193-.228.29-.342.097-.114.13-.196.196-.327.066-.131.033-.245-.016-.343-.05-.099-.445-1.09-.61-1.49z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
