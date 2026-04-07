// Common animation config
const animationConfig = {
  duration: 2000,
  easing: 'easeInOutQuart'
};

// PIE CHART - Purchase Factors (from your data)
new Chart(document.getElementById("pieChart"), {
  type: "pie",
  data: {
    labels: ["Economic", "Comfort", "Design", "Seat Capacity"],
    datasets: [{
      data: [34, 33, 14, 19],
      backgroundColor: [
        "#38bdf8",
        "#22c55e",
        "#facc15",
        "#ef4444"
      ],
      borderWidth: 2
    }]
  },
  options: {
    animation: animationConfig,
    plugins: {
      tooltip: {
        enabled: true
      },
      legend: {
        labels: { color: "white" }
      }
    }
  }
});


// COMPANY PREFERENCE (from your chart)
new Chart(document.getElementById("companyChart"), {
  type: "doughnut",
  data: {
    labels: ["Maruti Suzuki", "Tata Motors", "Hyundai", "Mahindra", "Other"],
    datasets: [{
      data: [42, 20, 11, 11, 16],
      backgroundColor: [
        "#3b82f6",
        "#10b981",
        "#f59e0b",
        "#ef4444",
        "#8b5cf6"
      ]
    }]
  },
  options: {
    animation: {
      ...animationConfig,
      animateScale: true,
      animateRotate: true
    },
    plugins: {
      legend: {
        labels: { color: "white" }
      }
    }
  }
});


// BAR GRAPH - Factors (approx from your bar diagram)
new Chart(document.getElementById("barChart"), {
  type: "bar",
  data: {
    labels: ["Comfort", "Design", "Economic", "Seat Capacity", "Multiple"],
    datasets: [{
      label: "Number of Customers",
      data: [30, 20, 40, 15, 35],
      backgroundColor: "#38bdf8"
    }]
  },
  options: {
  responsive: true,
  maintainAspectRatio: false,
  animation: animationConfig,

    animation: {
      duration: 2500,
      easing: 'easeOutBounce'
    },
    scales: {
      x: {
        ticks: { color: "white" }
      },
      y: {
        ticks: { color: "white" }
      }
    },
    plugins: {
      legend: {
        labels: { color: "white" }
      }
    }
  }
});


// SCROLL ANIMATION (fade-in sections)
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(50px)";
  observer.observe(card);
});

// THIRD PIE CHART (converted from bar data)
new Chart(document.getElementById("factorPieChart"), {
  type: "pie",
  data: {
    labels: ["Comfort", "Design", "Economic", "Seat Capacity", "Multiple"],
    datasets: [{
      data: [30, 20, 40, 15, 35],
      backgroundColor: [
        "#38bdf8",
        "#facc15",
        "#22c55e",
        "#ef4444",
        "#8b5cf6"
      ]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart'
    },
    plugins: {
      legend: {
        labels: { color: "white" }
      }
    }
  }
});