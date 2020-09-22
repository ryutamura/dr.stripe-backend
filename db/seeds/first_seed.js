exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("visits")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("visits").insert([
        {
          visit_date: "2019-12-11T04:22:27Z",
          treatment:
            "Asthma check up - Patient talked about recent trouble breathing.",
          symptoms: "coughing",
          doctor: "Yamamoto",
          paid: true,
          price: "¥1356.00",
          hospital_name: "Tokai University Tokyo Hospital",
          medicine: true,
        },
        {
          visit_date: "2019-10-15T00:30:46Z",
          treatment:
            "Follow up appointment regarding new inhaler for Asthma. New inhaler seems to be helping patient breathe more easily.",
          symptoms: "headache",
          doctor: "Hosono",
          paid: true,
          price: "¥3032.00",
          hospital_name: "University of Tokyo Hospital",
          medicine: false,
        },
        {
          visit_date: "2020-01-06T05:39:57Z",
          treatment:
            "Patient talks about recent coughing and heavy feeling in chest. New inhaler given as prescription",
          symptoms: "chest pain",
          doctor: "Kondo",
          paid: false,
          price: "¥6040.00",
          hospital_name: "JR Tokyo General Hospital",
          medicine: true,
        },
        {
          visit_date: "2020-07-28T07:28:22Z",
          treatment:
            "Asthma check up - Patient talked about recent trouble breathing.",
          symptoms: "heavy breathing",
          doctor: "Yamashita",
          paid: true,
          price: "¥3558.00",
          hospital_name: "Matsuzawa Hospital",
          medicine: false,
        },
        {
          visit_date: "2020-01-17T13:31:03Z",
          treatment:
            "Patient talks about recent coughing and heavy feeling in chest. New inhaler given as prescription",
          symptoms: "sleeplessness",
          doctor: "Yamashita",
          paid: true,
          price: "¥3015.00",
          hospital_name: "Matsuzawa Hospital",
          medicine: true,
        },
        {
          visit_date: "2019-10-28T09:49:04Z",
          treatment:
            "Follow up appointment regarding new inhaler for Asthma. New inhaler seems to be helping patient breathe more easily.",
          symptoms: "headache",
          doctor: "Tamura",
          paid: false,
          price: "¥1381.00",
          hospital_name: "Matsuzawa Hospital",
          medicine: false,
        },
        {
          visit_date: "2020-05-07T02:04:59Z",
          treatment:
            "Asthma check up - Patient talked about recent trouble breathing.",
          symptoms: "chest pain",
          doctor: "Ohira",
          paid: true,
          price: "¥30,010.00",
          hospital_name: "JR Tokyo General Hospital",
          medicine: true,
        },
        {
          visit_date: "2020-09-09T20:40:18Z",
          treatment:
            "Follow up appointment regarding Asthma. Inhaler seems to be helping patient breathe more easily.",
          symptoms: "sleeplessness",
          doctor: "Haberl",
          paid: false,
          price: "¥20,048.00",
          hospital_name: "JR Tokyo General Hospital",
          medicine: false,
        },
      ]);
    });
};
