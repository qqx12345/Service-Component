import '../output.css'
export default function Help(){
    return(<div>
 <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p>if you still have problem,please add our qq group</p>
          </blockquote>
          <figcaption className="mt-10">
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="text-gray-600">
                <a href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=nY2fpXAB5uyd4nvtJ04NsrDc_178zZi2&authKey=ZtF4FpYUqrJnSAexXtV6rq20bvrQxeG4xtoMsAnaoJZW5wnkLeTkATF8T3fIMfrh&noverify=0&group_code=941596822">click here
              </a></div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
    </div>)
}