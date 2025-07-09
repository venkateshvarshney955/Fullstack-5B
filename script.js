document.getElementById('addBtn').addEventListener('click', () => {
  const container = document.getElementById('progressBars');

  // Create progress bar container
  const progressBarContainer = document.createElement('div');
  progressBarContainer.classList.add('progress-container');

  const progressBar = document.createElement('div');
  progressBar.classList.add('progress-bar');

  progressBarContainer.appendChild(progressBar);
  container.appendChild(progressBarContainer);

  // Force reflow to trigger CSS transition
  void progressBar.offsetWidth;

  // Start the progress by setting width to 100%
  progressBar.style.width = '100%';
});