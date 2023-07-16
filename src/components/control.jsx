import React from "react";
import {
  Slider,
  IconButton,
  Box,
  Stack,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Grid,
  CircularProgress,
} from "@mui/material";
import Forward10Icon from "@mui/icons-material/Forward10";
import Replay5Icon from "@mui/icons-material/Replay5";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import SettingsIcon from "@mui/icons-material/Settings";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Grow from "@mui/material/Grow";
export const Control = ({
  controlRef,
  onPlayPause,
  playing,
  onRewind,
  onForward,
  played,
  onSeek,
  onSeekMouseUp,
  volume,
  onVolumeChangeHandler,
  onVolumeSeekUp,
  mute,
  onMute,
  duration,
  currentTime,
  onFullScreen,
  isFullscreen,
  settings,
  setSettings,
  setVideo,
  mouseMoveHandler,
  onBuffer,
  onPlaybackRateChange,
}) => {
  return (
    <>
      <Stack
        justifyContent="space-between"
        sx={{
          bgcolor: "rgba(0, 0, 0, 0.6)",
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: 1,
          transition: "0.5s",
        }}
        ref={controlRef}
        onMouseMove={mouseMoveHandler}
      >
        <Box>
          <Typography pl={2} pt={2} fontSize={22} color="error">
            რაღაც ფილმი
          </Typography>
        </Box>
        <Stack direction="row" justifyContent="center">
          {onBuffer ? (
            <CircularProgress color="error" />
          ) : (
            <>
              <Box onClick={onRewind}>
                <IconButton color="error">
                  <Replay5Icon fontSize="large" />
                </IconButton>
              </Box>

              <Box onClick={onPlayPause}>
                {playing ? (
                  <IconButton color="error">
                    <PauseIcon fontSize="large" />
                  </IconButton>
                ) : (
                  <IconButton color="error">
                    <PlayArrowIcon fontSize="large" />
                  </IconButton>
                )}
              </Box>

              <Box onClick={onForward}>
                <IconButton color="error">
                  <Forward10Icon fontSize="large" />
                </IconButton>
              </Box>
            </>
          )}
        </Stack>
        <Box>
          <Box px={2}>
            <Slider
              color="error"
              min={0}
              max={100}
              value={played * 100}
              onChange={onSeek}
              onChangeCommitted={onSeekMouseUp}
            />
          </Box>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Box>
                <IconButton color="error" onClick={onPlayPause}>
                  {playing ? (
                    <PauseIcon fontSize="medium" />
                  ) : (
                    <PlayArrowIcon fontSize="medium" />
                  )}
                </IconButton>
              </Box>
              <Box>
                <IconButton color="error">
                  <SkipNextIcon fontSize="medium" />
                </IconButton>
              </Box>
              <Box onClick={onMute}>
                {mute ? (
                  <IconButton color="error">
                    <VolumeOffIcon fontSize="medium" />
                  </IconButton>
                ) : (
                  <IconButton color="error">
                    <VolumeUpIcon fontSize="medium" />
                  </IconButton>
                )}
              </Box>
              <Box width={100}>
                <Slider
                  // className={`${classes.volumeSlider}`}
                  color="error"
                  onChange={onVolumeChangeHandler}
                  value={volume * 100}
                  onChangeCommitted={onVolumeSeekUp}
                />
              </Box>
              <Box pl={1}>
                <Typography color="error">
                  {currentTime} : {duration}
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Box position="relative">
                <Grow in={settings}>
                  <Stack
                    sx={{
                      position: "absolute",
                      top: -200,
                      left: -170,
                      bgcolor: "rgba(255,255,255,0.6)",
                      width: 200,
                      height: 180,
                      overflowY: "scroll",
                      p: 1,
                    }}
                  >
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>ხარისხი</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid container spacing={2}>
                          <Grid item>
                            <Button
                              color="error"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onClick={() =>
                                setVideo(
                                  "https://r190105.kujo-jotaro.com/shingeki-no-kyojin/2/12.720.1d197f2347802abf.mp4?hash1=7a8abf20a20937e216f7a20df0fd5b33&hash2=072790fdacc0ac1e569a2d97800eef07"
                                )
                              }
                            >
                              720p
                            </Button>
                          </Grid>
                          <Grid item>
                            <Button
                              color="error"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onClick={() =>
                                setVideo(
                                  "https://r190105.kujo-jotaro.com/shingeki-no-kyojin/2/12.480.7c8edecdfca2df70.mp4?hash1=f0254704822680844d14f16d4a722692&hash2=483c02c4255f9975444ff443b989a567"
                                )
                              }
                            >
                              480p
                            </Button>
                          </Grid>
                          <Grid item>
                            <Button
                              color="error"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onClick={() =>
                                setVideo(
                                  "https://r190105.kujo-jotaro.com/shingeki-no-kyojin/2/12.360.16bf96b6e53fb3ee.mp4?hash1=38cacbc2059e99127c61d3bff94fb205&hash2=5da21e8622ad5364ef9298e3825d0ad2"
                                )
                              }
                            >
                              360p
                            </Button>
                          </Grid>
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>გახმოვანება</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid container spacing={2}>
                          <Grid item>
                            <Button
                              color="error"
                              variant="outlined"
                              size="small"
                              fullWidth
                            >
                              GEO
                            </Button>
                          </Grid>
                          <Grid item>
                            <Button
                              color="error"
                              variant="outlined"
                              size="small"
                              fullWidth
                            >
                              ENG
                            </Button>
                          </Grid>
                          <Grid item>
                            <Button
                              color="error"
                              variant="outlined"
                              size="small"
                              fullWidth
                            >
                              JPN
                            </Button>
                          </Grid>
                          <Grid item>
                            <Button
                              color="error"
                              variant="outlined"
                              size="small"
                              fullWidth
                            >
                              RUS
                            </Button>
                          </Grid>
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography>სიჩქარე</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid container spacing={2}>
                          <Grid item>
                            <Button
                              color="error"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onClick={() => onPlaybackRateChange(0.5)}
                            >
                              0.5
                            </Button>
                          </Grid>
                          <Grid item>
                            <Button
                              color="error"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onClick={() => onPlaybackRateChange(1.0)}
                            >
                              1
                            </Button>
                          </Grid>
                          <Grid item>
                            <Button
                              color="error"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onClick={() => onPlaybackRateChange(1.5)}
                            >
                              1.5
                            </Button>
                          </Grid>
                          <Grid item>
                            <Button
                              color="error"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onClick={() => onPlaybackRateChange(2.0)}
                            >
                              2
                            </Button>
                          </Grid>
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
                  </Stack>
                </Grow>
                <IconButton
                  color="error"
                  onClick={() => setSettings((prev) => !prev)}
                >
                  <SettingsIcon fontSize="medium" />
                </IconButton>
              </Box>
              <Box>
                <IconButton color="error" onClick={onFullScreen}>
                  {isFullscreen ? (
                    <FullscreenExitIcon fontSize="medium" />
                  ) : (
                    <FullscreenIcon fontSize="medium" />
                  )}
                </IconButton>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};
