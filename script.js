document
  .querySelector("#search-form").addEventListener("submit", function (event) {

    event.preventDefault();

    const fromCity = document.getElementById("fromCity").value.trim().toLowerCase();
    const toCity = document.getElementById("toCity").value.trim().toLowerCase();

    const resultsSection = document.getElementById("results-section");
    resultsSection.innerHTML = "";

    const sampleData = [
      {
        trainName: "Hazara",
        from: "Pindi",
        to: "Jhang",
        departure: "10:00 AM",
        arrival: "2:00 AM",
        availability: "Available",
      },
      {
        trainName: "Hazara",
        from: "Jhang",
        to: "Mehrapur",
        departure: "2:00 AM",
        arrival: "4:00 PM",
        availability: "Waiting List",
      },
      {
        trainName: "Millat",
        from: "Lahore",
        to: "Toba",
        departure: "2:00 PM",
        arrival: "11:00 PM",
        availability: "Available",
      },
      {
        trainName: "Millat",
        from: "Toba",
        to: "Karachi",
        departure: "11:00 PM",
        arrival: "12:00 PM",
        availability: "Available",
      },
      {
        trainName: "Millat",
        from: "Multan",
        to: "Sadiqabad",
        departure: "7:00 AM",
        arrival: "1:00 PM",
        availability: "Waiting List",
      },
      {
        trainName: "Khyber Mail",
        from: "Quetta",
        to: "Peshawar",
        departure: "8:00 AM",
        arrival: "2:00 PM",
        availability: "Available",
      },
      {
        trainName: "Awami",
        from: "Okara",
        to: "Sadiqabad",
        departure: "9:00 AM",
        arrival: "10:00 PM",
        availability: "Available",
      },
      {
        trainName: "Awami",
        from: "Sadiqabad",
        to: "Mehrapur",
        departure: "10:00 AM",
        arrival: "3:00 PM",
        availability: "Waiting List",
      },
      {
        trainName: "Tezgam",
        from: "Hyderabad",
        to: "Karachi",
        departure: "11:00 AM",
        arrival: "5:00 PM",
        availability: "Available",
      },
      {
        trainName: "Tezgam",
        from: "Bhawalpur",
        to: "Hyderabad",
        departure: "1:00 PM",
        arrival: "3:00 AM",
        availability: "Available",
      },
      {
        trainName: "Hazara",
        from: "Jhang",
        to: "Sargodha",
        departure: "2:00 PM",
        arrival: "4:00 PM",
        availability: "Available",
      },
      {
        trainName: "Awami",
        from: "Faisalabad",
        to: "Sahiwal",
        departure: "3:00 PM",
        arrival: "11:00 PM",
        availability: "Waiting List",
      },
      {
        trainName: "Khyber Mail",
        from: "Lahore",
        to: "Quetta",
        departure: "4:00 PM",
        arrival: "8:00 AM",
        availability: "Available",
      },
      {
        trainName: "Shalimar",
        from: "Rawalpindi",
        to: "Karachi",
        departure: "1:00 PM",
        arrival: "9:00 AM",
        availability: "Available",
      },
      {
        trainName: "Tezgam",
        from: "Sahiwal",
        to: "Sargodha",
        departure: "6:00 PM",
        arrival: "10:00 PM",
        availability: "Waiting List",
      },
      {
        trainName: "Khyber Mail",
        from: "Karachi",
        to: "Lahore",
        departure: "7:00 PM",
        arrival: "11:00 PM",
        availability: "Available",
      },
      {
        trainName: "Millat",
        from: "Ghotki",
        to: "Jhelum",
        departure: "8:00 PM",
        arrival: "10:00 AM",
        availability: "Available",
      },
      {
        trainName: "Tezgam",
        from: "Tando Adam",
        to: "Mirpur",
        departure: "6:00 PM",
        arrival: "11:00 PM",
        availability: "Waiting List",
      },
      {
        trainName: "Shalimar",
        from: "Okara",
        to: "Lahore",
        departure: "10:00 PM",
        arrival: "12:00 PM",
        availability: "Available",
      },
      {
        trainName: "Shalimar",
        from: "Bhawalpur",
        to: "Lahore",
        departure: "6:00 AM",
        arrival: "12:00 PM",
        availability: "Available",
      },
      {
        trainName: "Hazara",
        from: "Multan",
        to: "Ghotki",
        departure: "7:00 AM",
        arrival: "9:00 PM",
        availability: "Waiting List",
      },
      {
        trainName: "Hazara",
        from: "Bhawalpur",
        to: "Karachi",
        departure: "8:00 AM",
        arrival: "12:00 PM",
        availability: "Available",
      },
      {
        trainName: "Khyber Mail",
        from: "Lahore",
        to: "Toba",
        departure: "9:00 AM",
        arrival: "1:00 PM",
        availability: "Available",
      },
      {
        trainName: "Millat",
        from: "Sargodha",
        to: "Faisalabad",
        departure: "10:00 AM",
        arrival: "2:00 PM",
        availability: "Waiting List",
      },
      {
        trainName: "Millat",
        from: "Ghotki",
        to: "Multan",
        departure: "11:00 AM",
        arrival: "3:00 PM",
        availability: "Available",
      },
      {
        trainName: "Hazara",
        from: "Sahiwal",
        to: "Rawalpindi",
        departure: "12:00 PM",
        arrival: "2:00 PM",
        availability: "Available",
      },
      {
        trainName: "Shalimar",
        from: "Rawalpindi",
        to: "Peshawar",
        departure: "1:00 PM",
        arrival: "3:00 AM",
        availability: "Waiting List",
      },
      {
        trainName: "Shalimar",
        from: "Peshawar",
        to: "Lahore",
        departure: "2:00 PM",
        arrival: "4:00 AM",
        availability: "Available",
      },
      {
        trainName: "Awami",
        from: "Karachi",
        to: "Peshawar",
        departure: "3:00 PM",
        arrival: "9:00 AM",
        availability: "Available",
      },
      {
        trainName: "Millat",
        from: "Peshawar",
        to: "Quetta",
        departure: "4:00 PM",
        arrival: "6:00 AM",
        availability: "Waiting List",
      },
      {
        trainName: "Millat",
        from: "Lahore",
        to: "Karachi",
        departure: "10:00 AM",
        arrival: "2:00 AM",
        availability: "Available",
      },
      {
        trainName: "Shalimar",
        from: "Lahore",
        to: "Karachi",
        departure: "7:00 PM",
        arrival: "12:00 PM",
        availability: "Available",
      },
    ];

    // Filter trains based on user input
    const filteredTrains = sampleData.filter((train) =>
        train.from.toLowerCase() === fromCity && train.to.toLowerCase() === toCity
    );

    if (filteredTrains.length === 0) {
      resultsSection.innerHTML = "<p>No trains found for this route.</p>";
      return;
    }

    filteredTrains.forEach(train => {
      const trainCard = document.createElement("div");
      trainCard.className = "train-card";
      trainCard.innerHTML = `
        <div class="train-info">
          <h2>${train.trainName}</h2>
          <p>${train.from} to ${train.to}</p>
          <p>Departure: ${train.departure}</p>
          <p>Arrival: ${train.arrival}</p>
          <p>Status: ${train.availability}</p>
        </div>
        <a href="/booking.html" class="book-button">Book Now</a>
      `;
      resultsSection.appendChild(trainCard);
    });
  });
