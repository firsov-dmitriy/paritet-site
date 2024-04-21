"use client";

import { memo } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Slider from "@/components/Slider/Slider";

function AboutAllocator({ text }: { text: string }) {
  return (
    <Typography component="span" color="orange">
      {text}
    </Typography>
  );
}
function About() {
  return (
    <Box pt={4} id="about">
      <Typography variant="h3" textAlign="center">
        О Компании
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { lg: "row", xs: "column" },
          gap: 4,
        }}
      >
        <Slider />
        <Typography
          component="p"
          variant="subtitle1"
          sx={{
            pt: { lg: "50px", xs: "0" },
            maxWidth: { lg: "300px", xs: "100%" },
          }}
        >
          Приветствуем вас в <AboutAllocator text="Paritet" /> – молодой
          компании, предоставляющей услуги по перевозке бетона в <br />
          <AboutAllocator text="Нижнем Новгороде" />. Наша команда состоит из
          энтузиастов, которые стремятся обеспечить строительные проекты в
          регионе надежными поставками бетона. Мы гордимся своей работой и
          стремимся к тому, чтобы каждый наш клиент получил качественное
          обслуживание и внимание к своим потребностям. Приглашаем вас
          воспользоваться нашими услугами и убедиться в нашем профессионализме и
          внимательном отношении к каждому клиенту.
        </Typography>
      </Box>
    </Box>
  );
}

export default memo(About);
