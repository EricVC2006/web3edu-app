export default function UserCard() {
  return (
    <div className="bg-base-200 shadow-xl w-full h-2/4 flex flex-row rounded-box sm:h-2/4 col-span-2">
      <figure className="h-full w-1/3">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVqpHJ_4FPld30j0LE15ImlXgD65AjQ16RuA&s"
          alt="Movie"
          className="h-full w-auto object-cover rounded-l-2xl"
        />
      </figure>
      <div className="w-4/6 text-base-content p-4">
        <h2 className="font-bold text-xl">Martin Burger King</h2>
        <p className="font-medium text-lg">São Paulo, Brasil</p>
      </div>
    </div>
  );
}
