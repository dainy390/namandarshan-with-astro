import React from "react";

const AstrologerCard = ({
  astrologer,
  onCall,
  onChat,
}: any) => {
  return (
    <div className="relative bg-white rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 p-5">

      {/* Online Badge */}
      <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full">
        Online
      </div>

      {/* Verified Badge */}
      <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full">
        Verified
      </div>

      {/* Profile */}
      <div className="flex flex-col items-center">
        <img
          src={astrologer.image}
          alt={astrologer.name}
          className="w-24 h-24 rounded-full object-cover border-4 border-orange-100"
        />

        <h3 className="text-xl font-bold mt-4 text-center">
          {astrologer.name}
        </h3>

        <div className="flex items-center gap-1 mt-1">
          ⭐
          <span className="font-medium">
            {astrologer.rating}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="mt-4 space-y-2 text-gray-700">

        <div className="flex justify-between">
          <span className="text-gray-500">
            Experience
          </span>

          <span className="font-medium">
            {astrologer.experience}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">
            Expertise
          </span>

          <span className="font-medium">
            {astrologer.expertise}
          </span>
        </div>

        <div>
          <p className="text-gray-500 mb-2">
            Languages
          </p>

          <div className="flex flex-wrap gap-2">
            {astrologer.languages?.map(
              (lang: string, index: number) => (
                <span
                  key={index}
                  className="bg-orange-50 text-orange-600 text-xs px-2 py-1 rounded-full"
                >
                  {lang}
                </span>
              )
            )}
          </div>
        </div>

      </div>

      {/* Price */}
      <div className="mt-5 flex items-center justify-between border-t pt-4">

        <div>
          <p className="text-xs text-gray-500">
            Consultation Fee
          </p>

          <p className="text-2xl font-bold text-orange-500">
            ₹{astrologer.price}
            <span className="text-sm text-gray-500 font-normal">
              /min
            </span>
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs text-gray-500">
            Status
          </p>

          <p className="text-green-600 font-semibold">
            Available
          </p>
        </div>

      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-3 mt-5">

        <button
          onClick={() => onChat(astrologer)}
          className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-medium transition"
        >
          Chat Now
        </button>

        <button
          onClick={() => onCall(astrologer)}
          className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-medium transition"
        >
          Call Now
        </button>

      </div>

    </div>
  );
};

export default AstrologerCard;