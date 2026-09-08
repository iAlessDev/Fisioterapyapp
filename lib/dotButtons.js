export default function DotButtons({
  scrollSnaps,
  selectedIndex,
  scrollTo,
}) {
  return (
    <div className="flex justify-center gap-2 mt-4">
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => scrollTo(index)}
          className={`
            w-3
            h-3
            rounded-full
            cursor-pointer
            transition-all

            ${
              selectedIndex === index
                ? "bg-green-600 scale-125"
                : "bg-gray-300"
            }
          `}
        />
      ))}
    </div>
  );
}