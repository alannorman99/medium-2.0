import Link from 'next/link'

function Header() {
  return (
    // Justify between spaces the two children evenly
    <header className="mx-auto flex max-w-7xl justify-between p-5">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 cursor-pointer object-contain" //keep aspect ration of image
            src="https://links.papareact.com/yvf"
            alt=""
          />
        </Link>
        {/* hide items unless screen is medium or above and center them with a space between of 5 */}
        <div className="hidden items-center space-x-5 md:inline-flex">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="rounded-full bg-green-600 px-4 py-1 text-white">
            Follow
          </h3>
        </div>
      </div>

      <div className="flex items-center space-x-5 text-green-600">
        <h3>Sign In</h3>
        <h3 className="rounded-full border border-green-600 px-4 py-1">
          Get Started
        </h3>
      </div>
    </header>
  )
}

export default Header
