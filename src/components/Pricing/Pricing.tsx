"use client";

import Typography from "@mui/material/Typography";
import BasicTable from "@/components/SimpleTable";
import Box from "@mui/material/Box";
import { graveСoncrete, solution } from "@/constant";
import { Chip, Collapse } from "@mui/material";
import { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/lab";
import Divider from "@mui/material/Divider";
import { useMediaQuery } from "@mui/system";

const formatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
});
export default function Pricing() {
  const [alignment, setAlignment] = useState<"grave" | "solution">("grave");
  const graveItems = ["фундаменты зданий", "дорожные покрытия", "стены"];
  const solutionItems = [
    "кладка кирпичей",
    "создания штукатурки",
    "засыпки трещин",
  ];
  const handleChange = (
    _: React.MouseEvent<HTMLElement>,
    newAlignment: "grave" | "solution",
  ) => {
    setAlignment(newAlignment);
  };
  const priceDelivery = formatter.format(700);
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box mt={5} id="price">
      <Box>
        <Box>
          <Box>
            <ToggleButtonGroup
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton value="grave">Бетон</ToggleButton>
              <ToggleButton value="solution">Раствор</ToggleButton>
            </ToggleButtonGroup>
          </Box>
          <Box px={{ md: 20 }} py={1}>
            <Collapse in={alignment === "grave"}>
              <Typography>
                Бетон на гравии - это тип бетона, где гравий используется в
                качестве одного из основных составляющих заполнителей. Гравий
                добавляется для увеличения прочности и устойчивости бетона. Этот
                тип бетона широко используется в строительстве дорог, аэродромов
                и других объектов, где требуется высокая прочность и
                износостойкость.
                <Divider
                  sx={{
                    paddingTop: "16px",
                  }}
                />
                <Box
                  pt="16px"
                  display="flex"
                  gap={1}
                  sx={{
                    flexWrap: "wrap",
                  }}
                >
                  {graveItems.map((item) => (
                    <Chip key={item} label={item} />
                  ))}
                </Box>
              </Typography>
            </Collapse>

            <Collapse in={alignment === "solution"}>
              <Typography component="div">
                Раствор - это смесь цемента, песка и воды, используемая в
                строительстве для кладки стен, затирки швов, штукатурки
                поверхностей и других строительных работ. Он обладает хорошей
                пластичностью и вязкостью, что делает его удобным для работы, и
                после затвердевания обеспечивает прочное соединение между
                строительными материалами.
                <Divider
                  sx={{
                    paddingTop: "16px",
                  }}
                />
                <Box pt="16px" display="flex" gap={1}>
                  {solutionItems.map((item) => (
                    <Chip key={item} label={item} />
                  ))}
                </Box>
              </Typography>
            </Collapse>
          </Box>
        </Box>
        <Typography variant="h3" textAlign="center">
          Цена
        </Typography>
        <Box sx={{ my: 2, display: "flex", flexDirection: "column", gap: 2 }}>
          <BasicTable rows={graveСoncrete} title="Бетон на гравии" />
          <BasicTable rows={solution} title="Раствор" />
        </Box>
        <Box sx={{ bgcolor: "#f5f5f5", padding: "16px", borderRadius: "8px" }}>
          <Typography
            component="div"
            variant={isMobile ? "body1" : "h6"}
            textAlign="center"
          >
            Стоимость доставки <strong>{priceDelivery} за 1 м3</strong>.
          </Typography>
          <Typography
            component="div"
            variant={isMobile ? "body1" : "h6"}
            textAlign="center"
          >
            При загрузке миксера по городу <strong>менее 9 м3</strong> оплата
            доставки <strong>за 9 м3</strong>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
