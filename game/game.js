document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  // Define your game characters
  const player = {
    x: 100,
    y: 300,
    width: 50,
    height: 50,
    color: "red",
  };

  const henchmonk = {
    x: 700,
    y: 300,
    width: 50,
    height: 50,
    color: "green",
  };

  // Game loop
  function gameLoop() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Your game logic for the cutscene and the battle would go here

    // Draw characters
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);

    ctx.fillStyle = henchmonk.color;
    ctx.fillRect(henchmonk.x, henchmonk.y, henchmonk.width, henchmonk.height);

    requestAnimationFrame(gameLoop);
  }

  // Start the game loop
  gameLoop();
});
